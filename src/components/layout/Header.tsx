export default function Header() {
  return (
    <div className="navbar p-0 mb-[1px] bg-base-100 shadow">
      <div className="flex justify-center w-52">
        <button className="btn btn-ghost text-xl">REACT</button>
      </div>
      <div className="flex-1 flex justify-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>Link</button>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <button>Link 1</button>
                </li>
                <li>
                  <button>Link 2</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
