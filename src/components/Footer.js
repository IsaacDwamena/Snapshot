import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footerItem greetings">
          <h3>Nice to meet you!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            praesentium dolore maiores nesciunt dignissimos. Molestias magnam at
            dolor eaque veritatis!
          </p>
        </div>
        <div className="footerItem storeInfo">
          <h3>Store Info</h3>
          <ul>
            <li>
              <a href="#">STORE LOCATION</a>
            </li>
            <li>
              <a href="#">HELP CENTRE</a>
            </li>
            <li>
              <a href="#">CUSTOMER SERVICE</a>
            </li>
            <li>
              <a href="#">CAREERS</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
          </ul>
        </div>
        <div className="footerItem newsletter">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            doloremque! Eveniet laborum sapiente error mollitia.
          </p>

          <form action="#" className="signUp">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <button>SIGN UP</button>
          </form>
        </div>
      </div>
      <p className="copyright">
        Copyright ©2022 Snapshot Ltd. All Rights Reserved. Prices,
        specifications, and images are subject to change without notice.
        Manufacturer rebates, terms, conditions, and expiration dates are
        subject to manufacturers printed forms. Prices are in Canadian Dollars
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  background: #282828;

  .container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    gap: 5rem;
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0rem;
    border-bottom: 1px dashed #cccccc78;

    .footerItem {
      h3 {
        margin-bottom: 1rem;
      }
      p {
        padding: 0rem;
        margin: 0;
        color: #ccc;
      }
    }

    .storeInfo {
      ul {
        li {
          list-style: none;
          margin-bottom: 0.5rem;
          a {
            text-decoration: none;
            color: #ccc;

            &:hover {
              border-bottom: 1px solid #ccc;
            }
          }
        }
      }
    }

    .newsletter {
      .signUp {
        margin: 1rem;
        display: flex;

        input {
          font-size: 1.5rem;
          color: #ccc;
          outline: none;
          border: none;
          border-bottom: 1px solid #ccc;
          background: transparent;
          padding: 0.5rem;
          margin: 0 1rem 1rem 0;
        }

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }

    @media (max-width: 950px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .copyright {
    margin: 0 auto;
    width: 60%;
    color: #ccc;
  }
`;

export default Footer;
