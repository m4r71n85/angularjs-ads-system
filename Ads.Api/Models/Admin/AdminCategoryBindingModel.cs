﻿namespace Ads.Api.Models.Admin
{
    using System.ComponentModel.DataAnnotations;

    public class AdminCategoryBindingModel
    {
        [Required]
        public string Name { get; set; }
    }
}
