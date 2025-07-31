import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <h1 class="header__headline">
        Hi Arthur, welcome! You have 12 open tasks.
      </h1>
      <div class="header__search">
        <input type="text" placeholder="Search" class="header__input" />
        <button class="header__submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div class="header__user">AR</div>
    </header>
  `,
  styleUrl: './header.scss',
})
export class Header {}
