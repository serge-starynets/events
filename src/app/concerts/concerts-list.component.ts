import { Component } from '@angular/core';

@Component({
    selector: 'concerts-list',
    template: `<div>
    <h1>Upcoming concerts</h1>
    <concert-thumbnail #thumbnail [concert]="concert1"></concert-thumbnail>
    </div>`
})

export class ConcertsListComponent {
    concert1 = {
        id: 1,
        name: 'Metallica concert',
        date: '9/02/2018',
        location: {
            address: '601 W. Dayton St., Madison, WI',
            venue: 'Kohl Center',
            country: 'United States'
        },
        time: '6:00 pm',
        price: 120,
        imageUrl: '/assets/images/metallica.png'
    }

}