﻿namespace Ads.Api.Models.Users
{
    using System.ComponentModel.DataAnnotations;

    public class UserUpdateAdBindingModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }

        public bool ChangeImage { get; set; }

        [RegularExpression("^data:image/.*$", ErrorMessage = "The image data should be valid Data URL, e.g. data:image/jpeg;base64,iVBORw0KGgo...")]
        public string ImageDataURL { get; set; }

        public int? CategoryId { get; set; }

        public int? TownId { get; set; }
    }
}
