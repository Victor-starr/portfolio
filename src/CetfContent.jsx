import PropTypes from 'prop-types';
export let FinalTyp = 'None';
// https://ibb.co/NYLqqb7 F-end 1
// https://ibb.co/kGvfRpG F-end 2
// https://ibb.co/XDHBt4r html 1
// https://ibb.co/tbFzTVd html 2
// https://ibb.co/c815PKy adv 1
// https://ibb.co/nLHx7h2 adv 2
// https://ibb.co/qppfpLL app 1
// https://ibb.co/0BS8rGd app 2
// https://ibb.co/7jnzk6S bs 1
// https://ibb.co/9wfWL86 bs 2
// https://ibb.co/vBXrmpH fund 1
// https://ibb.co/8NN7kyX fund 2

function CetfContent({type = 'None', title1 = 'JS CETF',title2 = 'DaysAgo',description = 'No description', imgFront = 'N/A', Cetfurl}) {

  function showCetf() {
    const moreInfo = document.querySelector('.moreInfo');
    moreInfo.dataset.url = Cetfurl;
    FinalTyp = type;
    const certImg = document.querySelector('#certImg');
    const cetfHolder = document.querySelector('section.cetfHolder');
    cetfHolder.style.display = 'block';
    setTimeout(() => {
      cetfHolder.classList.add('show');
    }, 100);
    cetfHolder.classList.remove('show');
    certImg.src = imgFront;
  }
  return (
    <article className="container" onClick={() => showCetf()}>
      <h2>{title1}</h2>
      <span>{title2}</span>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </article>
  );
}

CetfContent.propTypes = {
  type: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  imgFront: PropTypes.string,
  Cetfurl: PropTypes.string
};


export default CetfContent;