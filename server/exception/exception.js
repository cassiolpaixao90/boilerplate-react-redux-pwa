
'use strict';

import messageProperties from "../utils/messageProperties";


module.exports = function PocError(message, status) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message ||  messageProperties.MESSAGE_FALHA_REQUEST;
  this.status = status || 500;
};

require('util').inherits(module.exports, Error);
