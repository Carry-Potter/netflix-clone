import { DesktopNavContainer } from './styles';

export default function DesktopNav() {
  return (
    <DesktopNavContainer>
      <ul>
        <li className="selected">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
    </DesktopNavContainer>
  );
}
