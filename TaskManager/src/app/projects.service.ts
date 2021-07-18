import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>("/api/projects");
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.http.post<Project>("/api/projects", newProject);
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.http.put<Project>("/api/projects", existingProject);
  }
}
