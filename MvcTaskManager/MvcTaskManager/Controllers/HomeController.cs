﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MvcTaskManager.Controllers
{
    public class HomeController : Controller
    {
        // GET: api/values
        [Route("home/index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
