using FluentValidation;
using KoronaWirusMonitor3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KWMonitor.Validators
{
    public class CityValidator : AbstractValidator<City>
    {
        public CityValidator()
        {
            RuleFor(city => (city.Name))
            .NotEmpty().WithMessage("Nazwa miasta nie może być pusta")
            .MinimumLength(3).WithMessage("Nazwa miasta nie może być krótsza niż 3 znaki")
            .MaximumLength(30).WithMessage("Nazwa miasta nie może być dłuższa niż 30 znaków");
            RuleFor(district => (district.Name))
            .NotEmpty();
        }
    }
}