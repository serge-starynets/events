import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'concert-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{ concert.name  }}</h2>
    <div>Date: {{ concert.date  }}</div>
    <div>Time: {{ concert.time  }}</div>
    <div>
    <span>Location: {{ concert.location.venue  }}</span>
    <span class="pad-left">{{ concert.location.address  }}, {{ concert.location.country  }}</span>
    </div>
    <div>Price: \${{ concert.price  }}</div>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class ConcertThumbnailComponent {
    @Input() concert: any;


}