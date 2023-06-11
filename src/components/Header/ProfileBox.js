import { ProfileBoxContainer } from './styles';

import anne from '../../assets/images/anne.png';
import bea from '../../assets/images/bea.png';
import mason from '../../assets/images/mason.png';

export default function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <div className="main-profile">
        <img src={anne} alt="Current Profile" />
        <span />
      </div>
      <div className="complement">
        <div className="callout-arrow" />
      </div>
      <div className="dropdown">
        <ul>
          <li>
            <img src={bea} alt="Other Profile 1" />
            <span>user-1</span>
          </li>
          <li>
            <img src={mason} alt="Other Profile 2" />
            <span>user-2</span>
          </li>
          <li>
            <span>Manage Profiles</span>
          </li>
        </ul>
        <div className="kids">
          <a href="#">Kids</a>
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Sign Out  </a>
            </li>
          </ul>
        </div>
      </div>
    </ProfileBoxContainer>
  );
}
