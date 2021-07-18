import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  apiUrl: string = "https://localhost:5001"

  constructor(
    private http: HttpClient
  ) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl + "/api/projects");
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl + "/api/projects", newProject);
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.http.put<Project>(this.apiUrl + "/api/projects", existingProject);
  }
}
