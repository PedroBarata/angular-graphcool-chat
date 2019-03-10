import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // private apiURL = "https://api.graph.cool/simple/v1/cjqcu6isv5c2r011502jbmnuw";

  title = "angular-graphcool-apollo";
  constructor(private apollo: Apollo) {
    //this.createUser();
    this.allUsers();
  }

  allUsers(): void {
    this.apollo
      .query({
        query: gql`
          query {
            allUsers {
              id
              name
              email
            }
          }
        `
      })
      .subscribe(res => console.log(res));
  }

  createUser(): void {
    this.apollo
      .mutate({
        mutation: gql`
          mutation createNewUser(
            $name: String!
            $email: String!
            $pass: String!
          ) {
            createUser(name: $name, email: $email, password: $pass) {
              id
              name
              email
            }
          }
        `,
        variables: {
          name: "testeApollo",
          email: "emailAp@email.com",
          pass: "12345"
        }
      })
      .subscribe(res => console.log(res));
  }
}
