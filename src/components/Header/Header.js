import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

// Header
function Header() {
  return (
    <div className="App">

      <div className='container'>
        <svg className="Capa_1" xmlns="http://www.w3.org/2000/svg" id="Layer_1" enableBackground="new 0 0 478.445 478.445" height="512" viewBox="0 0 478.445 478.445" width="512"><path d="m429.664 106.633 19.606 33.959c3.987 6.906 2.281 15.693-4.001 20.605l-22.503 17.595c-4.927 3.852-7.209 10.235-5.71 16.307 6.952 28.146 7.313 58.503.063 87.999-1.515 6.164.647 12.647 5.647 16.557l22.502 17.594c6.282 4.912 7.988 13.699 4.001 20.605l-19.606 33.959c-3.987 6.906-12.45 9.821-19.845 6.837l-26.499-10.695c-5.825-2.351-12.525-1.133-17.048 3.225-21.128 20.351-47.123 35.674-76.08 44.046-6.108 1.766-10.654 6.883-11.54 13.178l-3.981 28.27c-1.112 7.897-7.869 13.769-15.844 13.769h-39.211c-7.975 0-14.732-5.872-15.844-13.769l-3.981-28.27c-.887-6.296-5.433-11.412-11.54-13.178-28.957-8.373-54.951-23.695-76.08-44.046-4.524-4.357-11.224-5.576-17.049-3.225l-26.499 10.695c-7.394 2.984-15.858.069-19.845-6.837l-19.606-33.959c-3.987-6.906-2.281-15.693 4.001-20.605l22.503-17.595c4.927-3.852 7.209-10.235 5.71-16.307-6.952-28.146-7.313-58.503-.063-87.999 1.515-6.164-.647-12.647-5.647-16.557l-22.502-17.594c-6.282-4.912-7.988-13.699-4.001-20.605l19.606-33.959c3.987-6.906 12.45-9.821 19.845-6.837l26.499 10.695c5.825 2.351 12.525 1.133 17.049-3.225 21.128-20.351 47.123-35.674 76.08-44.046 6.107-1.766 10.654-6.883 11.54-13.178l3.981-28.27c1.112-7.897 7.869-13.769 15.844-13.769h39.211c7.975 0 14.732 5.872 15.844 13.769l3.981 28.27c.887 6.296 5.433 11.412 11.54 13.178 28.957 8.373 54.951 23.695 76.08 44.046 4.524 4.357 11.224 5.576 17.048 3.225l26.499-10.695c7.395-2.984 15.858-.068 19.845 6.837z" fill="#fe4f60" /><path d="m290.965 109.084c-109.742 32.509-172.117 140.006-155.7 250.394 1.882 12.653-13.221 21.213-23.093 11.705-4.52-4.36-11.22-5.58-17.05-3.23l-26.5 10.7c-7.39 2.98-15.85.06-19.84-6.84l-19.61-33.96c-3.99-6.9-2.28-15.69 4-20.6l22.51-17.6c4.92-3.85 7.21-10.23 5.71-16.31-6.96-28.14-7.32-58.5-.07-87.99 1.52-6.17-.64-12.65-5.64-16.56l-22.51-17.6c-6.28-4.91-7.99-13.7-4-20.6l19.61-33.96c3.99-6.9 12.45-9.82 19.84-6.84l26.5 10.7c5.83 2.35 12.53 1.13 17.05-3.23 21.13-20.35 47.12-35.67 76.08-44.04 6.11-1.77 10.65-6.89 11.54-13.18l3.98-28.27c1.11-7.9 7.87-13.77 15.84-13.77h39.22c7.97 0 14.73 5.87 15.84 13.77l3.98 28.27c.89 6.29 5.43 11.41 11.54 13.18 24.034 6.949 23.155 39.231.773 45.861z" fill="#ff6d7a" /><path d="m239.223 119.223c65.83 0 120 54.17 120 120s-54.17 120-120 120-120-54.17-120-120 54.17-120 120-120z" fill="#d6f4fc" /><path d="m259.593 120.982c-71.489 33.465-116.402 100.683-125.29 176.17-9.6-17.21-15.08-36.98-15.08-57.93 0-73.603 67.226-131.033 140.37-118.24z" fill="#e8f8fc" /><path d="m463.151 329.813-33.51 58.042c-1.994 3.452-6.227 4.91-9.923 3.418l-49.328-19.913c-4.097-1.653-6.078-6.315-4.424-10.412 1.654-4.099 6.315-6.08 10.413-4.424l42.881 17.31 26.558-46.001-36.386-28.444c-2.612-2.042-3.693-5.482-2.72-8.651 10.078-32.808 10.463-68.968 0-103.029-.973-3.169.108-6.609 2.72-8.651l36.386-28.444-26.558-46.001-42.881 17.31c-3.075 1.243-6.595.458-8.853-1.97-24.083-25.895-54.915-43.712-89.161-51.526-3.235-.738-5.679-3.397-6.142-6.684l-6.442-45.743h-53.117l-6.442 45.741c-.463 3.286-2.907 5.945-6.142 6.684-34.247 7.814-65.078 25.632-89.161 51.526-2.258 2.428-5.778 3.213-8.853 1.97l-42.881-17.31-26.559 46.001 36.386 28.444c2.612 2.042 3.693 5.482 2.72 8.651-10.078 32.808-10.463 68.968 0 103.029.973 3.169-.108 6.609-2.72 8.651l-36.386 28.444 26.559 46.001 42.881-17.31c3.075-1.243 6.596-.458 8.853 1.97 24.083 25.895 54.915 43.712 89.161 51.526 3.235.738 5.679 3.397 6.142 6.684l6.442 45.741h53.117l6.442-45.741c.463-3.286 2.907-5.945 6.142-6.684 18.752-4.278 36.577-11.602 52.977-21.764 3.759-2.325 8.688-1.167 11.014 2.587 2.327 3.756 1.169 8.688-2.586 11.015-16.328 10.117-33.952 17.656-52.459 22.45l-6.655 47.253c-.556 3.947-3.935 6.884-7.922 6.884h-67.021c-3.987 0-7.366-2.937-7.922-6.884l-6.655-47.253c-33.458-8.658-63.725-26.149-88.106-50.919l-44.301 17.883c-3.697 1.494-7.929.035-9.923-3.418l-33.511-58.042c-1.994-3.453-1.14-7.847 2.001-10.303l37.595-29.39c-9.146-33.188-9.148-68.599 0-101.795l-37.595-29.39c-3.141-2.456-3.995-6.85-2.001-10.303l33.511-58.042c1.994-3.453 6.225-4.911 9.923-3.418l44.301 17.883c24.381-24.77 54.648-42.261 88.106-50.919l6.655-47.253c.555-3.943 3.934-6.88 7.921-6.88h67.021c3.987 0 7.366 2.937 7.922 6.884l6.655 47.253c33.458 8.658 63.725 26.149 88.106 50.919l44.302-17.883c3.697-1.491 7.93-.036 9.923 3.418l33.51 58.042c1.994 3.453 1.14 7.847-2.001 10.303l-37.595 29.39c9.146 33.188 9.148 68.599 0 101.795l37.595 29.39c3.141 2.455 3.995 6.848 2.001 10.302zm-237.033-52.534 40-68c2.24-3.809.969-8.712-2.839-10.952-3.807-2.239-8.711-.969-10.952 2.839l-40 68c-2.24 3.809-.969 8.712 2.839 10.952 3.81 2.24 8.713.968 10.952-2.839zm-31.239-68.725c-3.123-3.122-8.188-3.123-11.313 0l-25.012 25.012c-3.122 3.123-3.124 8.189 0 11.314l25.012 25.012c3.125 3.124 8.189 3.123 11.313 0 3.125-3.125 3.125-8.19 0-11.314l-19.355-19.354 19.355-19.354c3.125-3.126 3.125-8.191 0-11.316zm93.344 63.681c2.047 0 4.095-.781 5.657-2.343l25.012-25.013c3.122-3.123 3.124-8.189 0-11.314l-25.012-25.012c-3.124-3.123-8.189-3.123-11.313 0-3.125 3.125-3.125 8.19 0 11.314l19.355 19.354-19.355 19.355c-5.057 5.059-1.407 13.659 5.656 13.659zm-95.818 94.675c15.27 5.599 31.102 8.386 46.895 8.385 98.825-.005 165.058-103.194 123.314-193.261-31.533-68.036-112.54-97.736-180.58-66.204-86.499 40.09-106.111 155.354-36.93 221.612 3.191 3.057 8.256 2.947 11.311-.244 3.056-3.19 2.947-8.255-.244-11.311-61.001-58.426-43.772-160.149 32.59-195.54 60.037-27.823 131.512-1.619 159.335 58.415 27.824 60.033 1.619 131.511-58.415 159.335-29.083 13.479-61.674 14.825-91.771 3.791-4.147-1.519-8.744.61-10.265 4.757-1.519 4.149.611 8.745 4.76 10.265z" /></svg>
        <h1 className='title'>HELLO!</h1>
        <p className='introText'>I'm <strong>Kevan</strong>. A Full Stack Software Developer with experience building front-end applications and implementing back end solutions.</p>
        <p className='cta'>Check out some of my pojects below!</p>
        <div className='buttonWrapper'>
          <Link activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="button"><span>Portfolio</span></button>
          </Link>
        </div>
        <ul className="contact-info">
          <a className="link" href="https://github.com/KevZam" target="_blank" rel="noopener noreferrer"><li className="contact">Github</li></a>
          <a href="https://www.linkedin.com/in/kevzam/" target="_blank" rel="noopener noreferrer"><li className="contact">LinkedIn</li></a>
          <a href="Documents/Kevan-Zameni-Resume.pdf" download><li className="contact">Resume</li></a>
        </ul>
        <div className="banner">

        </div>
      </div>

    </div>
  );
}

export default Header;
