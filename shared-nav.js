/* shared-nav.js — injects topbar, sidebar, footer into every page */
(function() {
  const path = window.location.pathname;
  const inMonsters = path.includes('/monsters/');
  const root = inMonsters ? '../' : './';

  function isActive(href) {
    const full = root + href;
    return path.endsWith(href) || path.endsWith(href.replace('.html','')) ? 'active' : '';
  }

  function isMonsterActive(id) {
    return path.includes(id) ? 'active' : '';
  }

  document.getElementById('topbar').innerHTML = `
    <a class="topbar-logo" href="${root}index.html">
      <img src="${root}assets/logo.png" alt="WitcherCraft logo">
      <span class="topbar-logo-text">Witcher<span>Craft</span> Wiki</span>
    </a>
    <ul class="topbar-links">
      <li><a href="https://www.curseforge.com" target="_blank">CurseForge</a></li>
      <li><a href="https://discord.com" target="_blank">Discord</a></li>
      <li><a href="${root}index.html#other-mods">Other Mods</a></li>
      <li><a href="${root}index.html#contact">Contact</a></li>
    </ul>
  `;

  document.getElementById('sidebar').innerHTML = `
    <div class="sidebar-section">Getting Started</div>
    <nav>
      <a href="${root}index.html" class="${isActive('index.html')}">Home</a>
      <a href="${root}getting-started.html" class="${isActive('getting-started.html')}">Introduction</a>
      <a href="${root}signs.html" class="${isActive('signs.html')}">Signs</a>
      <a href="${root}alchemy.html" class="${isActive('alchemy.html')}">Alchemy</a>
      <a href="${root}witcher-gear.html" class="${isActive('witcher-gear.html')}">Witcher Gear</a>
    </nav>
    <div class="sidebar-section">Bestiary</div>
    <nav>
      <a href="${root}monsters.html" class="${isActive('monsters.html') || (inMonsters ? 'active' : '')}">Monsters</a>
      <a href="${root}monsters.html#necrophages" class="sub">Necrophages</a>
      <a href="${root}monsters.html#vampires" class="sub">Vampires</a>
      <a href="${root}monsters.html#specters" class="sub">Specters</a>
      <a href="${root}monsters.html#relicts" class="sub">Relicts</a>
      <a href="${root}monsters.html#draconids" class="sub">Draconids</a>
    </nav>
    <div class="sidebar-section">Items</div>
    <nav>
      <a href="${root}alchemy.html#potions" class="">Potions</a>
      <a href="${root}alchemy.html#decoctins" class="">Decoctins</a>
      <a href="${root}alchemy.html#oils" class="">Oils</a>
      <a href="${root}alchemy.html#bombs" class="">Bombs</a>
      <a href="${root}crafting.html" class="${isActive('crafting.html')}">Crafting</a>
    </nav>
  `;

  document.getElementById('footer').innerHTML = `
    <p>&copy; 2021&ndash;2025 Red Bolt Media &mdash; WitcherCraft Wiki</p>
  `;
})();
