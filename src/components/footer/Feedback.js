import { useState } from 'react';
import axios from 'axios';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

function Feedback(props) {
  const [rating, setRating] = useState(0);
  const [voted, setVoted] = useState(false);
  const [readable, setReadable] = useState(true);

  const sendRating = async (sendValue) => {
    setVoted(true);
    const post = "value="+sendValue;
    await axios({
      method: 'post',
      url: 'https://www.fgentili.it/setRating.php',
      data: post
    });
  }

  const myStylesLight = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#e29f07',
    inactiveFillColor: '#262626'
  }
  const myStylesDark = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#e29f07',
    inactiveFillColor: '#d0d4da'
  }

  function handleChange(selectedValue) {
    setReadable(false);
    sendRating(selectedValue);
    setRating(selectedValue);
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center w-full">
        <p className="flex gap-2 items-center font-caveat text-xl text-neutral-900 dark:text-white mb-3 my-drop-shadow">LEAVE A FEEDBACK</p>
        <Rating readOnly={!readable} style={{ maxWidth: 130 }} className="my-drop-shadow" value={rating} onChange={handleChange} itemStyles={props.darkToggle ? myStylesDark : myStylesLight} spaceInside="medium" />
        {voted ? (
          <p className="text-neutral-600 dark:text-neutral-400 pt-2 text-xs">Thanks for your support!</p>
        ) : null}
    </div>
  );
}

export default Feedback;
