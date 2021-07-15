import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	Designation: string;
	Username: string;
	NoOfTeamMembers: number;
	TotalCostOfAllProjects: number;
	PendingTasks: number;
	UpComingProjects: number;
	ProjectCost: number;
	CurrentExpenditure: number;
	AvailableFunds: number;

	Clients: string[];
	Projects: string[];
	Years: number[];
	TeamMembersSummary = [];
	TeamMembers = [];

	constructor() { }

	ngOnInit(): void {
		this.Designation = "Team Leader";
		this.Username = "John Smith";
		this.NoOfTeamMembers = 67;
		this.TotalCostOfAllProjects = 240;
		this.PendingTasks = 15;
		this.UpComingProjects = 2;
		this.ProjectCost = 2113507;
		this.CurrentExpenditure = 96788;
		this.AvailableFunds = 52536;

		this.Clients = [
			"ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
		]

		this.Projects = [
			"Project A", "Project B", "Project C", "Project D"
		]

		this.Years = [
			2019, 2020, 2021
		]

		this.TeamMembersSummary = [
			{ Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
			{ Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
			{ Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
			{ Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6}
		]

		this.TeamMembers = [
			{ Region: "East", Members: [
				{ ID: 1, Name: "Ford", Status: "Available"},
				{ ID: 2, Name: "Miller", Status: "Available"},
				{ ID: 3, Name: "Jones", Status: "Busy"},
				{ ID: 4, Name: "James", Status: "Busy"}
			]},
			{ Region: "West", Members: [
				{ ID: 1, Name: "Ford", Status: "Available"},
				{ ID: 2, Name: "Miller", Status: "Available"},
				{ ID: 3, Name: "Jones", Status: "Busy"},
				{ ID: 4, Name: "James", Status: "Busy"}
			]},
			{ Region: "South", Members: [
				{ ID: 1, Name: "Ford", Status: "Available"},
				{ ID: 2, Name: "Miller", Status: "Available"},
				{ ID: 3, Name: "Jones", Status: "Busy"},
				{ ID: 4, Name: "James", Status: "Busy"}
			]},
			{ Region: "North", Members: [
				{ ID: 1, Name: "Ford", Status: "Available"},
				{ ID: 2, Name: "Miller", Status: "Available"},
				{ ID: 3, Name: "Jones", Status: "Busy"},
				{ ID: 4, Name: "James", Status: "Busy"}
			]}
		]
	}

	onProjectChange($event: any) {
		if ($event.target.innerHTML == "Project A") {
			this.ProjectCost = 2133;
			this.CurrentExpenditure = 123123123;
			this.AvailableFunds = 52345
		} else if ($event.target.innerHTML == "Project B") {
			this.ProjectCost = 1231231;
			this.CurrentExpenditure = 12321333;
			this.AvailableFunds = 7777;
		} else if ($event.target.innerHTML == "Project C") {
			this.ProjectCost = 99999;
			this.CurrentExpenditure = 83482390;
			this.AvailableFunds = 123123;
		} else if ($event.target.innerHTML == "Project D") {
			this.ProjectCost = 344444;
			this.CurrentExpenditure = 848484;
			this.AvailableFunds = 23333;
		}
	}

}
