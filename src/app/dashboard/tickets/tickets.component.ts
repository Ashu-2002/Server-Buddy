import { Component, signal } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(data : {title: string, text: string}){
    const ticket: Ticket = {
      id: new Date().getTime().toString(),
      title: data.title,
      request: data.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

}
