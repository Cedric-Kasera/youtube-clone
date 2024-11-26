import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown } from "lucide-react";

type Comment = {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  dislikes: number;
  timestamp: string;
};

const Comments = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Great video! Thanks for sharing.",
      likes: 15,
      dislikes: 0,
      timestamp: "2 days ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Very informative, I learned a lot!",
      likes: 8,
      dislikes: 1,
      timestamp: "1 day ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        user: "Current User",
        avatar: "/placeholder.svg?height=32&width=32",
        content: newComment,
        likes: 0,
        dislikes: 0,
        timestamp: "Just now",
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">{comments.length} Comments</h2>
      <form onSubmit={handleSubmitComment} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="mb-2"
        />
        <Button type="submit">Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.user} />
              <AvatarFallback>{comment.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="font-semibold mr-2">{comment.user}</span>
                <span className="text-sm text-gray-500">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{comment.content}</p>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  {comment.dislikes}
                </Button>
                <Button variant="link" size="sm">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
