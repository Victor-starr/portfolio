import PropTypes from 'prop-types';
export let FinalTyp = 'None';

function CetfContent({ type = 'None', title1 = 'JS CETF',title2 = 'DaysAgo',description = 'No description' }) {
  function showCetf(typ) {
     FinalTyp = type;
    const certImg = document.querySelector('#certImg');
    const cetfHolder = document.querySelector('section.cetfHolder');
    cetfHolder.style.display = 'block';
    setTimeout(() => {
      cetfHolder.classList.add('show');
    }, 100);
    cetfHolder.classList.remove('show');
    let version = 1;
    certImg.src = `./Soft_${typ}_v${version}.png`;
  }

  return (
    <article className="container" onClick={() => showCetf(type)}>
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
};


export default CetfContent;