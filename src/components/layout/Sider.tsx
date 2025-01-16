import { Link } from '@tanstack/react-router';

export default function Sider() {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      <li>
        <details open>
          <summary>组件</summary>
          <ul>
            <li>
              <Link to='/component/calendar'>日历</Link>
            </li>
            <li>
              <Link to='/component/message'>消息提示</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>功能</summary>
          <ul>
            <li>
              <button>功能 1</button>
            </li>
            <li>
              <button>功能 2</button>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>功能</summary>
          <ul>
            <li>
              <button>功能 1</button>
            </li>
            <li>
              <button>功能 2</button>
            </li>
          </ul>
        </details>
      </li>
    </ul >
  );
}
