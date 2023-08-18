using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizApi.model;

namespace QuizApi.Controllers;


[Route("api/[controller]")]
[ApiController]
public class QuestionController : ControllerBase {
     
     private readonly QuizDbContext _context;

     public QuestionController(QuizDbContext context) {
        _context = context;
     }

     [HttpGet]
     public async Task<ActionResult<List<Question>>> GetQuestions(){
        return Ok(await _context.Questions.ToListAsync());
     }   
}