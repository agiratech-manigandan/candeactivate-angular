When you have set canDeativete return value false you are not switching another router until it’s set true.

 canDeactivate(): Promise<any> | boolean {
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
  }


Trying to move home page it’s show confirm popup as below. If you select OK will move to home otherwise your in same page only. 

