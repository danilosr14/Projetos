package one.digitalinnovation.beerstock.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BeerEmptyStockException extends Exception{

    public BeerEmptyStockException(Long id, int quantityToDecrement) {
        super(String.format("Beers with %s ID to decrement informed is negative: %s", id, quantityToDecrement));
    }
}
