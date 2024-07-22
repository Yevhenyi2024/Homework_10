const notifications = {
    all: [
      ['notif1', 'notif2'],
      ['notif3', 'notif4', 'notif5'],
      ['notif6']
    ],
    [Symbol.iterator]: function* () {
      for (const group of this.all) {
        for (const notification of group) {
          yield notification;
        }
      }
    }
  };
  for (const notification of notifications) {
    console.log(notification);
  }
  