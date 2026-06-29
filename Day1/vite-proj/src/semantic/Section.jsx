import React from 'react';
import './section.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

function Section(props) { 
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar" 
        src={user.imageUrl}
        alt={'Photo of ' + user.name} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

export default Section;