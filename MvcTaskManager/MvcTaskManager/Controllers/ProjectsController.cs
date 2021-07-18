using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MvcTaskManager.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("api/projects")]
        public List<Project> Get()
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            List<Project> projects = db.Projects.ToList();
            return projects;
        }

        [HttpGet]
        [Route("api/projects/search/{searchBy}/{searchText}")]
        public List<Project> Search(string searchBy, string searchText)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            List<Project> projects = null;

            if (searchBy == "ProjectID")
            {
                projects = db.Projects.Where(x => x.ProjectID.ToString().Contains(searchText)).ToList();
            } else if (searchBy == "ProjectName")
            {
                projects = db.Projects.Where(x => x.ProjectName.ToString().Contains(searchText)).ToList();
            }

            if (searchBy == "DateOfStart")
            {
                projects = db.Projects.Where(x => x.DateOfStart.ToString().Contains(searchText)).ToList();
            }

            if (searchBy == "TeamSize")
            {
                projects = db.Projects.Where(x => x.TeamSize.ToString().Contains(searchText)).ToList();
            }

            return projects;
        }

        [HttpPost]
        [Route("api/projects")]
        public Project Post([FromBody] Project project)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            db.Projects.Add(project);
            db.SaveChanges();
            return project;
        }

        [HttpPut]
        [Route("api/projects")]
        public Project Put([FromBody] Project project)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            Project existingProject = db.Projects.Where(x => x.ProjectID == project.ProjectID).FirstOrDefault();

            if(existingProject != null)
            {
                existingProject.ProjectName = project.ProjectName;
                existingProject.DateOfStart = project.DateOfStart;
                existingProject.TeamSize = project.TeamSize;
                db.SaveChanges();
                return existingProject;
            } else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/projects")]
        public int Delete(int ProjectID)
        {
            TaskManagerDbContext db = new TaskManagerDbContext();
            Project existingProject = db.Projects.Where(x => x.ProjectID == ProjectID).FirstOrDefault();

            if (existingProject != null)
            {
                db.Projects.Remove(existingProject);
                db.SaveChanges();
                return ProjectID;
            } else
            {
                return -1;
            }
        }

    }
}
