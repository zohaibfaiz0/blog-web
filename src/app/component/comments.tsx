'use client'
import React, { useState, useEffect } from 'react';

// Define interface for comment type
interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Load comments from local storage on mount
  useEffect(() => {
    const savedComments = JSON.parse(
      localStorage.getItem('comments') || '[]'
    ) as Comment[];
    setComments(savedComments);
  }, []);

  // Save comments to local storage when comments change
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!name.trim()) {
      setError('Name is required');
      setIsSubmitting(false);
      return;
    }
    if (!commentText.trim()) {
      setError('Comment cannot be empty');
      setIsSubmitting(false);
      return;
    }

    // Create new comment
    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      text: commentText.trim(),
      date: new Date().toLocaleString()
    };

    // Update comments
    setComments(prevComments => [...prevComments, newComment]);

    // Reset form
    setName('');
    setCommentText('');
    setError('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-[#32AA27] border-b pb-3">
        Comments
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            value={commentText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-md ${
            isSubmitting 
              ? 'bg-gray-400' 
              : 'bg-[#32AA27] text-white hover:bg-[#2a8820]'
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment: Comment) => (
            <div 
              key={comment.id} 
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="mb-2">
                <h4 className="font-semibold text-[#32AA27]">
                  {comment.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {comment.date}
                </p>
              </div>
              <p className="text-gray-700">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;