import { Tables } from "@/utils/supabase/types-supabase"
import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return format(date, "PPP", { locale: es })
}

export function formatDateWithTime(date: string) {
  return format(date, "PPPp", { locale: es })
}

interface Comment {
  id: number;
  content: string;
  created_at: string;
  answer_to_id: number | null;
  parent_id: number | null;
  user_id: string;
  profiles: {
    full_name: string;
    avatar_url: string;
  } | null;
}

interface CommentMap {
  [parentId: number]: Comment[];
}

export function sortComments(comments: Comment[]): Comment[] {
  // Separate primary comments and replies
  const primaryComments = comments.filter(comment => comment.parent_id === null);
  const replies = comments.filter(comment => comment.parent_id !== null);

  // Create a map to group replies by parent_id
  const repliesMap: CommentMap = replies.reduce((acc, reply) => {
    if (!acc[reply.parent_id!]) {
      acc[reply.parent_id!] = [];
    }
    acc[reply.parent_id!].push(reply);
    return acc;
  }, {} as CommentMap);

  // Sort replies by created_at
  Object.keys(repliesMap).forEach(parentId => {
    repliesMap[parseInt(parentId)].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  });

  // Create the final sorted list
  const sortedComments: Comment[] = [];
  primaryComments.forEach(comment => {
    sortedComments.push(comment);
    if (repliesMap[comment.id]) {
      sortedComments.push(...repliesMap[comment.id]);
    }
  });

  return sortedComments;
}