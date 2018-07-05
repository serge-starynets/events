import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{ event.name  }}</h2>
    <div>Date: {{ event.date  }}</div>
    <div>Time: {{ event.time  }}</div>
    <div>
    <span>Location: {{ event.location.venue  }}</span>
    <span class="pad-left">{{ event.location.address  }}, {{ event.location.country  }}</span>
    </div>
    <div>Price: \${{ event.price  }}</div>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: any;


}