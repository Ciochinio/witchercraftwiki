/* shared-nav.js — injects topbar, sidebar, footer into every page */
(function() {
  const path = window.location.pathname;
  const inMonsters = path.includes('/monsters/');
  const root = inMonsters ? '../' : './';

  function isActive(href) {
    return path.endsWith(href) || path.endsWith(href.replace('.html','')) ? 'active' : '';
  }

  document.getElementById('topbar').innerHTML = `
    <a class="topbar-logo" href="${root}index.html">
      <img src="${root}assets/logo.png" alt="WitcherCraft logo">
      <span class="topbar-logo-text">Witcher<span>Craft</span> Wiki</span>
    </a>
    <ul class="topbar-links">
      <li><a href="${root}documentation.html">Docs</a></li>
      <li><a href="https://github.com/RedBoltMedia/WitcherCraft/wiki" target="_blank">Old Wiki</a></li>
      <li><a href="https://www.curseforge.com/minecraft/mc-mods/witchercraft" target="_blank">CurseForge</a></li>
      <li><a href="https://discord.gg/xReJfktHS2" target="_blank">Discord</a></li>
      <li><a href="${root}index.html#contact">Contact</a></li>
    </ul>
  `;

  document.getElementById('sidebar').innerHTML = `
    <div class="sidebar-section">Gameplay</div>
    <nav>
      <a href="${root}index.html" class="${isActive('index.html')}"> Home</a>
      <a href="${root}getting-started.html" class="${isActive('getting-started.html')}">⚔ Getting Started</a>
      <a href="${root}signs.html" class="${isActive('signs.html')}">✦ Signs</a>
      <a href="${root}alchemy.html" class="${isActive('alchemy.html')}">⚗ Alchemy</a>
      <a href="${root}witcher-gear.html" class="${isActive('witcher-gear.html')}">🛡 Witcher Gear</a>
      <a href="${root}crafting.html" class="${isActive('crafting.html')}">⚒ Crafting</a>
    </nav>
    <div class="sidebar-section">Bestiary</div>
    <nav>
      <a href="${root}monsters.html" class="${isActive('monsters.html') || (inMonsters ? 'active' : '')}">☠ Monsters</a>
      <a href="${root}monsters.html#necrophages" class="sub">· Necrophages</a>
      <a href="${root}monsters.html#vampires" class="sub">· Vampires</a>
      <a href="${root}monsters.html#specters" class="sub">· Specters</a>
      <a href="${root}monsters.html#relicts" class="sub">· Relicts</a>
      <a href="${root}monsters.html#draconids" class="sub">· Draconids</a>
    </nav>
    <div class="sidebar-section">Development</div>
    <nav>
      <a href="${root}roadmap.html" class="${isActive('roadmap.html')}"> Roadmap</a>
      <a href="${root}changelog.html" class="${isActive('changelog.html')}"> Changelog</a>
    </nav>
    <div class="sidebar-section">Links</div>
    <nav>
      <a href="https://discord.gg/xReJfktHS2" target="_blank"> Discord</a>
      <a href="https://www.curseforge.com/minecraft/mc-mods/witchercraft" target="_blank"> CurseForge</a>
      <a href="https://modrinth.com/mod/witchercraft" target="_blank"> Modrinth</a>
      <a href="https://github.com/Ciochinio" target="_blank"> GitHub</a>
    </nav>
  `;

  document.getElementById('footer').innerHTML = `
    <p>&copy; 2021&ndash;2026 Red Bolt Media &mdash; WitcherCraft Wiki</p>
  `;
})();
