import 'google-protobuf';

import {Pizza, PizzaSize} from './proto/common/pizza_pb';
import {PizzaServiceClient} from './proto/pizza_service_grpc_web_pb';
import {OrderPizzaRequest, OrderPizzaResponse} from './proto/pizza_service_pb';

declare function require(module: string): any;

describe('DeliveryPerson', () => {
  it('Non-service imported classes should not be null', () => {
    expect(OrderPizzaRequest).toBeDefined();
    expect(OrderPizzaResponse).toBeDefined();
  });

  it('Service imported class should not be null', () => {
    expect(PizzaServiceClient).toBeDefined();
  });

  it('Generated code seems to work', () => {
    const request = new OrderPizzaRequest();

    const pizza = new Pizza();
    pizza.setSize(PizzaSize.PIZZA_SIZE_LARGE);
    request.addPizzas(pizza);

    expect(request.getPizzasList().length).toBe(1);
  });

  it('delivery_person_ts_proto is included since it is a transitive dependency', () => {
    const PROTOS = require('./proto/common/delivery_person_pb');
    const DeliveryPerson = PROTOS.DeliveryPerson;
    const pizza = new Pizza();
    pizza.setSize(PizzaSize.PIZZA_SIZE_LARGE);

    const person = new DeliveryPerson();
    person.setPizzasList([pizza]);

    expect(person.getPizzasList().length).toBe(1);
  });
});
