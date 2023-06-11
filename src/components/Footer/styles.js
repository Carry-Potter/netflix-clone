import styled from 'styled-components';

export default styled.footer`
  color: #fff;

  text-align: center;
  
  span {
    font-size: 1.4rem;
  }

  .footer {
    background-color: #222;
    padding: 20px;
    color: #fff;
  }
  
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .footer-links a {
    color: #aaa;
    text-decoration: none;
    margin: 5px;
  }
  
  .footer-links a:hover {
    color: #fff;
  }
  
  .footer-language {
    text-align: center;
  }
  
  .footer-language a {
    color: #aaa;
    text-decoration: none;
    margin: 5px;
  }
  
  .footer-language a:hover {
    color: #fff;
`;
