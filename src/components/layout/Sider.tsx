export default function Sider() {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      <li>
        <button>Item 1</button>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <button>Submenu 1</button>
            </li>
            <li>
              <button>Submenu 2</button>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <button>Submenu 1</button>
                  </li>
                  <li>
                    <button>Submenu 2</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <button>Item 3</button>
      </li>
    </ul>
  );
}
