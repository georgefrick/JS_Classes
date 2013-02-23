/*
 * Just a small calculator object.
 */ 
(function() {
	var Calculator = function() {
	    this.currentValue = '';
	    this.Accumulate = 0;
	    this.FlagNewNum = false;
	    this.xxPendingOp = "";
	    return this;
  	};

	window.Calculator = Calculator;

    Calculator.prototype.GetValue = function() {
        return this.currentValue;
    }
    
	Calculator.prototype.NumPressed = function(Num) {
      if (this.FlagNewNum) {
        this.currentValue = Num + '';
        this.FlagNewNum = false;
      } else {
        if (this.currentValue === "0") {
          this.currentValue = Num;
        } else {
          this.currentValue += Num;
        }
      }
    }
    
    Calculator.prototype.Operation = function(Op) {
	    var Readout = this.currentValue;
	    if (this.FlagNewNum && this.xxPendingOp !== "=");
	    else {
 	      this.FlagNewNum = true;
	      if ( '+' === this.xxPendingOp ) {
	        this.Accumulate += parseFloat(Readout);
	      } else if ( '-' === this.xxPendingOp ) {
	        this.Accumulate -= parseFloat(Readout);
	      } else if ( '/' === this.xxPendingOp ) {
	        this.Accumulate /= parseFloat(Readout);
	      } else if ( "*" === this.xxPendingOp ) {
	        this.Accumulate *= parseFloat(Readout);
	      } else {
	        this.Accumulate = parseFloat(Readout);
	      }
	      this.currentValue = this.Accumulate;
	      this.xxPendingOp = Op;
	    }
    }
  
	Calculator.prototype.Decimal = function() {
	    var curReadOut = this.currentValue;
	    if (this.FlagNewNum) {
	      curReadOut = "0.";
	      this.FlagNewNum = false;
	    } else {
	      if (curReadOut.indexOf(".") === -1)
	        curReadOut += ".";
	    }
	    this.currentValue = curReadOut;
	}
  
	Calculator.prototype.ClearEntry = function() {
	    this.currentValue = "0";
	    this.FlagNewNum = true;
	}
  
	Calculator.prototype.Clear = function() {
		this.Accumulate = 0;
		this.xxPendingOp = "";
		this.ClearEntry();
	}
	
	Calculator.prototype.Neg = function() {
		this.currentValue = parseFloat(this.currentValue) * -1;
	}
	
	Calculator.prototype.Percent = function() {
		this.currentValue = (parseFloat(this.currentValue) / 100) * parseFloat(this.Accumulate);
	}	   
	
})();
