import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {

  constructor() { }

  formData={
    category: '--Select an issue type--',
    description: '',
    longDescription: ''
}

categories = [
  { label: '--Select an issue type--', value: 'default' },
  { label: 'Enquiry / Help', value: 'inquiry' },
  { label: 'Navigate Issue', value: 'navigateissue' },
  { label: 'Other - Please Explain', value: 'others' },]

  ngOnInit(): void {
  }

}
