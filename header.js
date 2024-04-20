class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   <nav>
    <div class="navbar">
      <div class="logo" style="background-color:#6495ED;width:60px;height:41px;color:white">KH</div>
      <div class="search-box">
        <i class='bx bx'></i>
      </div>
    </div>
  </nav>`
        ;
    }
}
customElements.define("header-component", Header);