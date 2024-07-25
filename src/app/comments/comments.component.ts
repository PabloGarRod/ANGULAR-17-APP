import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>Comentarios de texto</p>
    <img
      src="https://miro.medium.com/v2/format:webp/0*ZjYSm_q36J4KChdn"
      alt="This is fine"
    />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam
      magni sequi id ratione nisi placeat, est architecto consequuntur enim
      dolor sed. Minus vel voluptas, id iste reiciendis ipsa dolorem.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
