using System.Xml.Linq;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizApi.model;
using System.IO.Compression;

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
        var randQuestions = await _context.Questions
        .Select(x => new {
            QId = x.QId,
            QnInWord = x.QnInWord,
            ImgName = x.ImgName,
            Options = new String[] {x.option1 , x.option2, x.option3, x.option4}
        }).OrderBy(y => Guid.NewGuid())
        .Take(5).ToListAsync();

        return Ok(randQuestions);
     }   
}