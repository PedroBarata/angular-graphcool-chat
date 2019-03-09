import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private apiURL = "https://api.graph.cool/simple/v1/cjqcu6isv5c2r011502jbmnuw";

  title = "angular-graphcool-apollo";
  constructor(private http: HttpClient) {
    this.createUser();
    this.allUsers();
  }

  allUsers(): void {
    const body = {
      query: `
      query {
        allUsers{
          id,
          name,
          email
        }
      }`
    };

    this.http.post(this.apiURL, body).subscribe(res => console.log(res));
  }

  createUser(): void {
    const body = {
      query: `
      mutation createNewUser($name: String!, $email: String!, $pass: String!) {
        createUser(name: $name, email: $email, password: $pass) {
          id,
          name,
          email
        }
      }`,
      variables: {
        name: "Teste1",
        email: "email@email.com",
        pass: "12345"
      }
    };

    this.http.post(this.apiURL, body).subscribe(res => console.log(res));
  }
}
