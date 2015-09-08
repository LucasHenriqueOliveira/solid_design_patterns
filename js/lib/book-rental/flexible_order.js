var FlexibleOrder = function(user) {
    Order.apply(this, [ user ]);
};

FlexibleOrder.prototype = Order.prototype;