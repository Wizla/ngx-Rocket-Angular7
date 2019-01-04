import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { CoreModule, HttpCacheService } from '@app/core';
import { GifService } from './gif.service';

describe('GifService', () => {
  let quoteService: GifService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, GifService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, GifService, HttpTestingController],
    (htttpCacheService: HttpCacheService, _quoteService: GifService, _httpMock: HttpTestingController) => {
      quoteService = _quoteService;
      httpMock = _httpMock;

      htttpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getRandomGif', () => {
    it('should return a string in case of error', () => {
      // Act
      const randomQuoteSubscription = quoteService.getRandomGif();

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(typeof quote).toEqual('string');
        expect(quote).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});
