import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';

const UserMentions = () => {
  const [value, setValue] = useState('');
  const [mentionedUser, setMentionedUser] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const users = [
    { id: '1', display: 'Samuel Jackson' },
    { id: '2', display: 'Binoy David' },
    { id: '3', display: 'Johnson' },
    { id: '4', display: 'Selar' },
    // Add more user objects as needed...
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSelectUser = (id, display) => {
    const mentionValue = `@${display} `;
    setValue(value + mentionValue);
    setMentionedUser({ id, display });
  };

  const handlePostComment = () => {
    if (mentionedUser) {
      const newComment = `Posting comment mentioning: ${mentionedUser.display}`;
      setCommentList([...commentList, newComment]);
      setValue('');
      setMentionedUser(null);
    } else {
      alert('Please mention a user before posting.');
    }
  };

  const CustomSuggestion = ({ display }) => {
    const firstLetter = display.charAt(0).toUpperCase();
    const backgroundColor = getColorFromFirstLetter(firstLetter);
    return (
      <div className="flex items-center">
        <div className="rounded-full h-8 w-8 flex justify-center items-center mr-2" style={{ backgroundColor }}>
          {firstLetter}
        </div>
        {display}
      </div>
    );
  };

  const getColorFromFirstLetter = (letter) => {
    const colors = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    ];
    const index = letter.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="p-4">
      <h1 className="py-10 text-3xl text-center font-bold mb-4 text-white">Berlinsoft Technical Task</h1>
      <MentionsInput 
        value={value} 
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md"
        style={{ minHeight: '100px', width: '600px', backgroundColor: 'white' }} 
        placeholder="  Create a post ..."
      >
        <Mention
          trigger="@"
          data={users}
          displayTransform={(id, display) => `@${display}`}
          renderSuggestion={CustomSuggestion}
          onAdd={(id, display) => handleSelectUser(id, display)}
        />
      </MentionsInput>
      <div className="flex justify-end mt-4">
        <button
          onClick={handlePostComment}
          className="px-4 py-2 bg-purple-400 text-black font-bold rounded-md hover:bg-purple-500"
          style={{ width: '120px' }} 
        >
          Post
        </button>
      </div>
      <div className="mt-4">
        {commentList.map((comment, index) => (
          <p key={index} className="text-gray-500">
            {comment.includes('Posting comment mentioning:') ? (
              <span style={{ fontWeight: 'bold', color: 'skyblue' }}>{comment}</span>
            ) : (
              comment
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserMentions;

