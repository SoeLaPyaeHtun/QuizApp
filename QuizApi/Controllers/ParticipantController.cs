using System.Globalization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizApi.model;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace QuizApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ParticipantController : ControllerBase
{
    private readonly QuizDbContext _context;

    public ParticipantController(QuizDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Participant>>> GetParticipants()
    {
        return Ok(await _context.Participants.ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<Participant>> AddParticipant(Participant participant){

        var temp = _context.Participants.Where(x => x.Name == participant.Name).FirstOrDefault();

        if(temp == null){
            _context.Participants.Add(participant);
            await _context.SaveChangesAsync();
        }else{
            participant = temp;
        }

        return Ok(participant);
    }

}
