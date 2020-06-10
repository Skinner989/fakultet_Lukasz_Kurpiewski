using FluentValidation;
using KoronaWirusMonitor3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KWMonitor.Validators
{
    public class DistrictValidator : AbstractValidator<District>
    {
        public DistrictValidator()
        {
            RuleFor(district => (district.Name))
            .NotEmpty().WithMessage("Nazwa nie może być pusta")
            .MinimumLength(3).WithMessage("Nazwa nie może być krótsza niż 3 znaki")
            .MaximumLength(30).WithMessage("Nazwa nie może być dłuższa niż 30 znaków");
        }
    }
}