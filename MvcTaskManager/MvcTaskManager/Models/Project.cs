using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace MvcTaskManager.Models
{
    public class Project
    {
        [Key]
        public int ProjectID { get; set; }
        public string ProjectName { get; set; }
        [DisplayFormat(DataFormatString = "d/M/yyyy")]
        public DateTime DateOfStart { get; set; }
        public int TeamSize { get; set; }
    }

    public class TaskManagerDbContext:DbContext
    {
        public DbSet<Project> Projects { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost,1433\\Catalog=TaskManager;Database=TaskManager;User=sa;Password=Password123");
        }
    }
}
