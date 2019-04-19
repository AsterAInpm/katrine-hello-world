import UserInterface from "katrine/lib/UserInterface";

export default class UserObject implements UserInterface {

  private signed: boolean = false;

  constructor(
    private id: number,
    private role: string,
    private userData = {}
  ) {
  }

  getId(): string | number {
    return this.id;
  }

  getRole(): string {
    return this.role;
  }

  getUserData(): any {
    return this.userData;
  }

  isSignedIn(): boolean {
    return this.signed;
  }

  setSigned(signed = true) {
    this.signed = signed;
  }

}

