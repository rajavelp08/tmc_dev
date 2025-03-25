using System.Net;

namespace TMC.Models
{
    public class ApiResponse
    {
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
        public List<string> ErrorMessages { get; set; } = new List<string>();

        public bool isSuccess { get; set; } = true;
        public object Result { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }

        public ApiResponse NotFound(string message)
        {
            this.isSuccess = false;
            this.ErrorMessages.Add(message);
            this.Result = "";
            this.StatusCode = HttpStatusCode.NotFound;

            return this;
        }
    }
}
