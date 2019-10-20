package com.example.team.exampleproject3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.example.team.exampleproject3.util.MapperUtil;
import com.example.team.exampleproject3.model.Book;
import com.example.team.exampleproject3.service.BookService;
import com.example.team.exampleproject3.service.BusinessException;
import com.example.team.exampleproject3.util.NullAwareBeanUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BooksController {

	@Autowired
	private BookService service;

    /**
     * Searchs the book with the filter.
     *
     * @return DTO with list of model founded and filtered.
     */
    @GetMapping
    public ResponseEntity<List<BookDTO>> search(HttpServletRequest request) {
		Iterable<Book> models = service.search();
		List<BookDTO> dtos = toListDTO(models);

        return new ResponseEntity<List<BookDTO>>(dtos, HttpStatus.OK);
	}

	/**
     * Gets one model by its specific ID as DTO.
     *
     * @param id ID of instance.
     * @return DTO of Model instance founded.
     */
    @GetMapping("/{id}")
    public BookDTO getOne(HttpServletRequest request, @PathVariable Integer id) {
		Book model = service.getOne(id);
        return mapTo(model, BookDTO.class);
	}
	
	/**
     * Inserts the model instance.
     *
     * @param bookDTO Model DTO.
     * @return Response.
     * @throws Exception
     */
    @PostMapping
    public ResponseEntity<BookDTO> insert(HttpServletRequest request, @Valid @RequestBody BookDTO bookDTO) {
        try {
            Book model = service.insert(mapTo(bookDTO, Book.class));
            return created(mapTo(model, BookDTO.class));
        } catch (Exception e) {
            return notAcceptable(e);
        }
    }

    /**
     * Updates the model instance.
     *
     * @param id       ID of instance.
     * @param bookDTO Model DTO.
     * @return Response.
     * @throws Exception
     */
    @PutMapping("/{id}")
    public ResponseEntity<BookDTO> update(HttpServletRequest request, @Valid @PathVariable Integer id, @RequestBody BookDTO bookDTO) {
        try {
            service.update(id, mapTo(bookDTO, Book.class));
            return ok(bookDTO);
        } catch (Exception e) {
            return notAcceptable(e);
        }
    }

    /**
     * Updates the model instance partially.
     *
     * @param id       ID of instance.
     * @param bookDTO Model.
     * @return Response.
     * @throws Exception
     */
    @PatchMapping("/{id}")
    public ResponseEntity<BookDTO> updatePartial(HttpServletRequest request, @PathVariable Integer id, @RequestBody BookDTO bookDTO) {
        try {
        	Book model = mapTo(bookDTO, Book.class);
			Book dbModel = service.getOne(id);
            NullAwareBeanUtils.getInstance().copyProperties(dbModel, model);
            service.update(id, dbModel);
            return ok(bookDTO);
        } catch (Exception e) {
            return notAcceptable(e);
        }
    }

    /**
     * Deletes the model instance.
     *
     * @param id ID of instance.
     * @return Response.
     * @throws Exception
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(HttpServletRequest request, @PathVariable Integer id) throws BusinessException {
        service.delete(id);

        return success();
    }
	
	/**
     * Converts the list of models into list of DTOs.
     *
     * @param items Model items.
     * @return DTOs.
     */
    protected List<BookDTO> toListDTO(Iterable<Book> items) {
        return MapperUtil.toList(items, BookDTO.class);
	}
	
	/**
	 * Maps the source object the a new destination type instance.
	 * 
	 * @param source
	 * 		Source object.
	 * @param destClass
	 * 		Destination class.
	 * @return Instance of destination type.
	 */
    protected <S, D> D mapTo(S source, Class<D> destClass) {
        return MapperUtil.mapTo(source, destClass);
	}
	
	/**
     * Response CREATED (201) for the REST requests.
     *
     * @param element Element.
     * @return CREATED (201).
     */
    protected <E> ResponseEntity<E> created(E element) {
        return new ResponseEntity<>(element, HttpStatus.CREATED);
	}
	
    /**
     * Response Not Acceptable(406) for the REST requests.
     * @param locale Locale.
     * @param e Throw Exception e.
     * @return NOT ACCEPTABLE (406).
     */
	protected <E> ResponseEntity<E> notAcceptable(Exception e) {
        return notAcceptable(e.getMessage());
    }

	/**
	 * Response Not Acceptable(406) for the REST requests.
	 * 
	 * @param locale Locale.
	 * @param message Message
	 * @return NOT ACCEPTABLE (406).
	 */
    @SuppressWarnings("unchecked")
	protected <E> ResponseEntity<E> notAcceptable(String message) {
    	return new ResponseEntity<>((E) new RestMessageDTO(message), HttpStatus.NOT_ACCEPTABLE);
	}
	
	/**
     * Response OK (200) for the REST requests.
     *
     * @param element Element.
     * @return OK (200).
     */
    protected <E> ResponseEntity<E> ok(E element) {
    	return responseEntity(element, HttpStatus.OK);
	}

	/**
	 * Returns a success response.
	 * 
	 * @return Success response.
	 */
	protected ResponseEntity<?> success() {
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	/**
     * Response for the REST requests.
     *
     * @param element    Element.
     * @param status Http Status.
     * @return Response.
     */
    protected <E> ResponseEntity<E> responseEntity(E element, HttpStatus status) {
        return new ResponseEntity<>(element, status);
    }
}
