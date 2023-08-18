﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuizApi.data;

#nullable disable

namespace QuizApi.Migrations
{
    [DbContext(typeof(QuizDbContext))]
    partial class QuizDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("QuizApi.model.Participant", b =>
                {
                    b.Property<Guid>("ParticipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.Property<int>("timeTaken")
                        .HasColumnType("int");

                    b.HasKey("ParticipantId");

                    b.ToTable("Participants");
                });

            modelBuilder.Entity("QuizApi.model.Question", b =>
                {
                    b.Property<Guid>("QId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Answer")
                        .HasColumnType("int");

                    b.Property<string>("ImgName")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("QnInWord")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("option1")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("option2")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("option3")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("option4")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("QId");

                    b.ToTable("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
